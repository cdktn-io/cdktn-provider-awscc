# `dataAwsccBraketSpendingLimit` Submodule <a name="`dataAwsccBraketSpendingLimit` Submodule" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBraketSpendingLimit <a name="DataAwsccBraketSpendingLimit" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/braket_spending_limit awscc_braket_spending_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.Initializer"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

new dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit(scope: Construct, id: string, config: DataAwsccBraketSpendingLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig">DataAwsccBraketSpendingLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig">DataAwsccBraketSpendingLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBraketSpendingLimit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isConstruct"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformElement"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformDataSource"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.generateConfigForImport"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBraketSpendingLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBraketSpendingLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBraketSpendingLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/braket_spending_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBraketSpendingLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.deviceArn">deviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.queuedSpend">queuedSpend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.spendingLimit">spendingLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.spendingLimitArn">spendingLimitArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList">DataAwsccBraketSpendingLimitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.timePeriod">timePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference">DataAwsccBraketSpendingLimitTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.totalSpend">totalSpend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deviceArn`<sup>Required</sup> <a name="deviceArn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.deviceArn"></a>

```typescript
public readonly deviceArn: string;
```

- *Type:* string

---

##### `queuedSpend`<sup>Required</sup> <a name="queuedSpend" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.queuedSpend"></a>

```typescript
public readonly queuedSpend: string;
```

- *Type:* string

---

##### `spendingLimit`<sup>Required</sup> <a name="spendingLimit" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.spendingLimit"></a>

```typescript
public readonly spendingLimit: string;
```

- *Type:* string

---

##### `spendingLimitArn`<sup>Required</sup> <a name="spendingLimitArn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.spendingLimitArn"></a>

```typescript
public readonly spendingLimitArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.tags"></a>

```typescript
public readonly tags: DataAwsccBraketSpendingLimitTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList">DataAwsccBraketSpendingLimitTagsList</a>

---

##### `timePeriod`<sup>Required</sup> <a name="timePeriod" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.timePeriod"></a>

```typescript
public readonly timePeriod: DataAwsccBraketSpendingLimitTimePeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference">DataAwsccBraketSpendingLimitTimePeriodOutputReference</a>

---

##### `totalSpend`<sup>Required</sup> <a name="totalSpend" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.totalSpend"></a>

```typescript
public readonly totalSpend: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBraketSpendingLimitConfig <a name="DataAwsccBraketSpendingLimitConfig" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.Initializer"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

const dataAwsccBraketSpendingLimitConfig: dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/braket_spending_limit#id DataAwsccBraketSpendingLimit#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBraketSpendingLimitTags <a name="DataAwsccBraketSpendingLimitTags" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTags.Initializer"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

const dataAwsccBraketSpendingLimitTags: dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTags = { ... }
```


### DataAwsccBraketSpendingLimitTimePeriod <a name="DataAwsccBraketSpendingLimitTimePeriod" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriod.Initializer"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

const dataAwsccBraketSpendingLimitTimePeriod: dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriod = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBraketSpendingLimitTagsList <a name="DataAwsccBraketSpendingLimitTagsList" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.Initializer"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

new dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBraketSpendingLimitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBraketSpendingLimitTagsOutputReference <a name="DataAwsccBraketSpendingLimitTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

new dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTags">DataAwsccBraketSpendingLimitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBraketSpendingLimitTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTags">DataAwsccBraketSpendingLimitTags</a>

---


### DataAwsccBraketSpendingLimitTimePeriodOutputReference <a name="DataAwsccBraketSpendingLimitTimePeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccBraketSpendingLimit } from '@cdktn/provider-awscc'

new dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.endAt">endAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.startAt">startAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriod">DataAwsccBraketSpendingLimitTimePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endAt`<sup>Required</sup> <a name="endAt" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.endAt"></a>

```typescript
public readonly endAt: string;
```

- *Type:* string

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBraketSpendingLimitTimePeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBraketSpendingLimit.DataAwsccBraketSpendingLimitTimePeriod">DataAwsccBraketSpendingLimitTimePeriod</a>

---



