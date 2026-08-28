# `dataAwsccMedialiveMultiplex` Submodule <a name="`dataAwsccMedialiveMultiplex` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveMultiplex <a name="DataAwsccMedialiveMultiplex" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplex awscc_medialive_multiplex}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex(scope: Construct, id: string, config: DataAwsccMedialiveMultiplexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig">DataAwsccMedialiveMultiplexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig">DataAwsccMedialiveMultiplexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveMultiplex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isConstruct"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformElement"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformDataSource"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.generateConfigForImport"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMedialiveMultiplex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveMultiplex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveMultiplex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplex#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveMultiplex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList">DataAwsccMedialiveMultiplexDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.multiplexId">multiplexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.multiplexSettings">multiplexSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference">DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.pipelinesRunningCount">pipelinesRunningCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.programCount">programCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList">DataAwsccMedialiveMultiplexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccMedialiveMultiplexDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList">DataAwsccMedialiveMultiplexDestinationsList</a>

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

---

##### `multiplexSettings`<sup>Required</sup> <a name="multiplexSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.multiplexSettings"></a>

```typescript
public readonly multiplexSettings: DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference">DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pipelinesRunningCount`<sup>Required</sup> <a name="pipelinesRunningCount" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.pipelinesRunningCount"></a>

```typescript
public readonly pipelinesRunningCount: number;
```

- *Type:* number

---

##### `programCount`<sup>Required</sup> <a name="programCount" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.programCount"></a>

```typescript
public readonly programCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.tags"></a>

```typescript
public readonly tags: DataAwsccMedialiveMultiplexTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList">DataAwsccMedialiveMultiplexTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveMultiplexConfig <a name="DataAwsccMedialiveMultiplexConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexConfig: dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_multiplex#id DataAwsccMedialiveMultiplex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveMultiplexDestinations <a name="DataAwsccMedialiveMultiplexDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinations.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexDestinations: dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinations = { ... }
```


### DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings <a name="DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings: dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings = { ... }
```


### DataAwsccMedialiveMultiplexMultiplexSettings <a name="DataAwsccMedialiveMultiplexMultiplexSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettings.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexMultiplexSettings: dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettings = { ... }
```


### DataAwsccMedialiveMultiplexTags <a name="DataAwsccMedialiveMultiplexTags" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTags.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

const dataAwsccMedialiveMultiplexTags: dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveMultiplexDestinationsList <a name="DataAwsccMedialiveMultiplexDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveMultiplexDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference <a name="DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entitlementArn`<sup>Required</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---


### DataAwsccMedialiveMultiplexDestinationsOutputReference <a name="DataAwsccMedialiveMultiplexDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings">multiplexMediaConnectOutputDestinationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinations">DataAwsccMedialiveMultiplexDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multiplexMediaConnectOutputDestinationSettings`<sup>Required</sup> <a name="multiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings"></a>

```typescript
public readonly multiplexMediaConnectOutputDestinationSettings: DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">DataAwsccMedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexDestinations">DataAwsccMedialiveMultiplexDestinations</a>

---


### DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference <a name="DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds">maximumVideoBufferDelayMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate">transportStreamBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId">transportStreamId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate">transportStreamReservedBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettings">DataAwsccMedialiveMultiplexMultiplexSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumVideoBufferDelayMilliseconds`<sup>Required</sup> <a name="maximumVideoBufferDelayMilliseconds" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds"></a>

```typescript
public readonly maximumVideoBufferDelayMilliseconds: number;
```

- *Type:* number

---

##### `transportStreamBitrate`<sup>Required</sup> <a name="transportStreamBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate"></a>

```typescript
public readonly transportStreamBitrate: number;
```

- *Type:* number

---

##### `transportStreamId`<sup>Required</sup> <a name="transportStreamId" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId"></a>

```typescript
public readonly transportStreamId: number;
```

- *Type:* number

---

##### `transportStreamReservedBitrate`<sup>Required</sup> <a name="transportStreamReservedBitrate" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate"></a>

```typescript
public readonly transportStreamReservedBitrate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexMultiplexSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexMultiplexSettings">DataAwsccMedialiveMultiplexMultiplexSettings</a>

---


### DataAwsccMedialiveMultiplexTagsList <a name="DataAwsccMedialiveMultiplexTagsList" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMedialiveMultiplexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMedialiveMultiplexTagsOutputReference <a name="DataAwsccMedialiveMultiplexTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMedialiveMultiplex } from '@cdktn/provider-awscc'

new dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTags">DataAwsccMedialiveMultiplexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMedialiveMultiplexTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveMultiplex.DataAwsccMedialiveMultiplexTags">DataAwsccMedialiveMultiplexTags</a>

---



