# `dataAwsccDmsDataProvider` Submodule <a name="`dataAwsccDmsDataProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsDataProvider <a name="DataAwsccDmsDataProvider" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_data_provider awscc_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProvider(scope: Construct, id: string, config: DataAwsccDmsDataProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig">DataAwsccDmsDataProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig">DataAwsccDmsDataProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isConstruct"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformElement"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformDataSource"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.generateConfigForImport"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDmsDataProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderCreationTime">dataProviderCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.exactSettings">exactSettings</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference">DataAwsccDmsDataProviderSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList">DataAwsccDmsDataProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

---

##### `dataProviderCreationTime`<sup>Required</sup> <a name="dataProviderCreationTime" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderCreationTime"></a>

```typescript
public readonly dataProviderCreationTime: string;
```

- *Type:* string

---

##### `dataProviderIdentifier`<sup>Required</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderIdentifier"></a>

```typescript
public readonly dataProviderIdentifier: string;
```

- *Type:* string

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `exactSettings`<sup>Required</sup> <a name="exactSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.exactSettings"></a>

```typescript
public readonly exactSettings: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.settings"></a>

```typescript
public readonly settings: DataAwsccDmsDataProviderSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference">DataAwsccDmsDataProviderSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.tags"></a>

```typescript
public readonly tags: DataAwsccDmsDataProviderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList">DataAwsccDmsDataProviderTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsDataProviderConfig <a name="DataAwsccDmsDataProviderConfig" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderConfig: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/dms_data_provider#id DataAwsccDmsDataProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsDataProviderSettings <a name="DataAwsccDmsDataProviderSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsDocDbSettings <a name="DataAwsccDmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsDocDbSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings <a name="DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsIbmDb2LuwSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings <a name="DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsMariaDbSettings <a name="DataAwsccDmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsMariaDbSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsMongoDbSettings <a name="DataAwsccDmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsMongoDbSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsMySqlSettings <a name="DataAwsccDmsDataProviderSettingsMySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsMySqlSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsOracleSettings <a name="DataAwsccDmsDataProviderSettingsOracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsOracleSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsPostgreSqlSettings <a name="DataAwsccDmsDataProviderSettingsPostgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsPostgreSqlSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsRedshiftSettings <a name="DataAwsccDmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsRedshiftSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettings = { ... }
```


### DataAwsccDmsDataProviderSettingsSybaseAseSettings <a name="DataAwsccDmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderSettingsSybaseAseSettings: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettings = { ... }
```


### DataAwsccDmsDataProviderTags <a name="DataAwsccDmsDataProviderTags" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTags.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

const dataAwsccDmsDataProviderTags: dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettings">DataAwsccDmsDataProviderSettingsDocDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsDocDbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettings">DataAwsccDmsDataProviderSettingsDocDbSettings</a>

---


### DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings">DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings">DataAwsccDmsDataProviderSettingsIbmDb2LuwSettings</a>

---


### DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings">DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings">DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettings</a>

---


### DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettings">DataAwsccDmsDataProviderSettingsMariaDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsMariaDbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettings">DataAwsccDmsDataProviderSettingsMariaDbSettings</a>

---


### DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings">DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings">DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---


### DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">authSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettings">DataAwsccDmsDataProviderSettingsMongoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsMongoDbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettings">DataAwsccDmsDataProviderSettingsMongoDbSettings</a>

---


### DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettings">DataAwsccDmsDataProviderSettingsMySqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsMySqlSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettings">DataAwsccDmsDataProviderSettingsMySqlSettings</a>

---


### DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">asmServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">secretsManagerSecurityDbEncryptionSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettings">DataAwsccDmsDataProviderSettingsOracleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asmServer`<sup>Required</sup> <a name="asmServer" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```typescript
public readonly asmServer: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```typescript
public readonly secretsManagerOracleAsmAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```typescript
public readonly secretsManagerOracleAsmSecretId: string;
```

- *Type:* string

---

##### `secretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Required</sup> <a name="secretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecurityDbEncryptionSecretId`<sup>Required</sup> <a name="secretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```typescript
public readonly secretsManagerSecurityDbEncryptionSecretId: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsOracleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettings">DataAwsccDmsDataProviderSettingsOracleSettings</a>

---


### DataAwsccDmsDataProviderSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference">DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">ibmDb2LuwSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference">DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettings">ibmDb2ZOsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference">DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.mariaDbSettings">mariaDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference">DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference">DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.mySqlSettings">mySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference">DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference">DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference">DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference">DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.sybaseAseSettings">sybaseAseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference">DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettings">DataAwsccDmsDataProviderSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docDbSettings`<sup>Required</sup> <a name="docDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference">DataAwsccDmsDataProviderSettingsDocDbSettingsOutputReference</a>

---

##### `ibmDb2LuwSettings`<sup>Required</sup> <a name="ibmDb2LuwSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```typescript
public readonly ibmDb2LuwSettings: DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference">DataAwsccDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference</a>

---

##### `ibmDb2ZOsSettings`<sup>Required</sup> <a name="ibmDb2ZOsSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettings"></a>

```typescript
public readonly ibmDb2ZOsSettings: DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference">DataAwsccDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference</a>

---

##### `mariaDbSettings`<sup>Required</sup> <a name="mariaDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```typescript
public readonly mariaDbSettings: DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference">DataAwsccDmsDataProviderSettingsMariaDbSettingsOutputReference</a>

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference">DataAwsccDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference</a>

---

##### `mongoDbSettings`<sup>Required</sup> <a name="mongoDbSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference">DataAwsccDmsDataProviderSettingsMongoDbSettingsOutputReference</a>

---

##### `mySqlSettings`<sup>Required</sup> <a name="mySqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference">DataAwsccDmsDataProviderSettingsMySqlSettingsOutputReference</a>

---

##### `oracleSettings`<sup>Required</sup> <a name="oracleSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference">DataAwsccDmsDataProviderSettingsOracleSettingsOutputReference</a>

---

##### `postgreSqlSettings`<sup>Required</sup> <a name="postgreSqlSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference">DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference">DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference</a>

---

##### `sybaseAseSettings`<sup>Required</sup> <a name="sybaseAseSettings" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```typescript
public readonly sybaseAseSettings: DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference">DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettings">DataAwsccDmsDataProviderSettings</a>

---


### DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettings">DataAwsccDmsDataProviderSettingsPostgreSqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsPostgreSqlSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsPostgreSqlSettings">DataAwsccDmsDataProviderSettingsPostgreSqlSettings</a>

---


### DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettings">DataAwsccDmsDataProviderSettingsRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsRedshiftSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsRedshiftSettings">DataAwsccDmsDataProviderSettingsRedshiftSettings</a>

---


### DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">encryptPassword</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettings">DataAwsccDmsDataProviderSettingsSybaseAseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `encryptPassword`<sup>Required</sup> <a name="encryptPassword" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```typescript
public readonly encryptPassword: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderSettingsSybaseAseSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderSettingsSybaseAseSettings">DataAwsccDmsDataProviderSettingsSybaseAseSettings</a>

---


### DataAwsccDmsDataProviderTagsList <a name="DataAwsccDmsDataProviderTagsList" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDmsDataProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDmsDataProviderTagsOutputReference <a name="DataAwsccDmsDataProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDmsDataProvider } from '@cdktn/provider-awscc'

new dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTags">DataAwsccDmsDataProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDmsDataProviderTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsDataProvider.DataAwsccDmsDataProviderTags">DataAwsccDmsDataProviderTags</a>

---



