# `dataAwsccLambdaEventSourceMapping` Submodule <a name="`dataAwsccLambdaEventSourceMapping` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaEventSourceMapping <a name="DataAwsccLambdaEventSourceMapping" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_event_source_mapping awscc_lambda_event_source_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping(scope: Construct, id: string, config: DataAwsccLambdaEventSourceMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig">DataAwsccLambdaEventSourceMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig">DataAwsccLambdaEventSourceMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaEventSourceMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isConstruct"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformElement"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformDataSource"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.generateConfigForImport"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLambdaEventSourceMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLambdaEventSourceMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLambdaEventSourceMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaEventSourceMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig">amazonManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.bisectBatchOnFunctionError">bisectBatchOnFunctionError</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference">DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.documentDbEventSourceConfig">documentDbEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.eventSourceArn">eventSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.eventSourceMappingArn">eventSourceMappingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.eventSourceMappingId">eventSourceMappingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.filterCriteria">filterCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference">DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.functionResponseTypes">functionResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference">DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.maximumBatchingWindowInSeconds">maximumBatchingWindowInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.maximumRecordAgeInSeconds">maximumRecordAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference">DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.parallelizationFactor">parallelizationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.provisionedPollerConfig">provisionedPollerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference">DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.queues">queues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference">DataAwsccLambdaEventSourceMappingScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.selfManagedEventSource">selfManagedEventSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig">selfManagedKafkaEventSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.sourceAccessConfigurations">sourceAccessConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList">DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.startingPosition">startingPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.startingPositionTimestamp">startingPositionTimestamp</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList">DataAwsccLambdaEventSourceMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.topics">topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.tumblingWindowInSeconds">tumblingWindowInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `amazonManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="amazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.amazonManagedKafkaEventSourceConfig"></a>

```typescript
public readonly amazonManagedKafkaEventSourceConfig: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference</a>

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `bisectBatchOnFunctionError`<sup>Required</sup> <a name="bisectBatchOnFunctionError" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.bisectBatchOnFunctionError"></a>

```typescript
public readonly bisectBatchOnFunctionError: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference">DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference</a>

---

##### `documentDbEventSourceConfig`<sup>Required</sup> <a name="documentDbEventSourceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.documentDbEventSourceConfig"></a>

```typescript
public readonly documentDbEventSourceConfig: DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference">DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `eventSourceArn`<sup>Required</sup> <a name="eventSourceArn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.eventSourceArn"></a>

```typescript
public readonly eventSourceArn: string;
```

- *Type:* string

---

##### `eventSourceMappingArn`<sup>Required</sup> <a name="eventSourceMappingArn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.eventSourceMappingArn"></a>

```typescript
public readonly eventSourceMappingArn: string;
```

- *Type:* string

---

##### `eventSourceMappingId`<sup>Required</sup> <a name="eventSourceMappingId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.eventSourceMappingId"></a>

```typescript
public readonly eventSourceMappingId: string;
```

- *Type:* string

---

##### `filterCriteria`<sup>Required</sup> <a name="filterCriteria" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.filterCriteria"></a>

```typescript
public readonly filterCriteria: DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference">DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `functionResponseTypes`<sup>Required</sup> <a name="functionResponseTypes" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.functionResponseTypes"></a>

```typescript
public readonly functionResponseTypes: string[];
```

- *Type:* string[]

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference">DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference</a>

---

##### `maximumBatchingWindowInSeconds`<sup>Required</sup> <a name="maximumBatchingWindowInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.maximumBatchingWindowInSeconds"></a>

```typescript
public readonly maximumBatchingWindowInSeconds: number;
```

- *Type:* number

---

##### `maximumRecordAgeInSeconds`<sup>Required</sup> <a name="maximumRecordAgeInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.maximumRecordAgeInSeconds"></a>

```typescript
public readonly maximumRecordAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference">DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference</a>

---

##### `parallelizationFactor`<sup>Required</sup> <a name="parallelizationFactor" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.parallelizationFactor"></a>

```typescript
public readonly parallelizationFactor: number;
```

- *Type:* number

---

##### `provisionedPollerConfig`<sup>Required</sup> <a name="provisionedPollerConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.provisionedPollerConfig"></a>

```typescript
public readonly provisionedPollerConfig: DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference">DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference</a>

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.queues"></a>

```typescript
public readonly queues: string[];
```

- *Type:* string[]

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: DataAwsccLambdaEventSourceMappingScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference">DataAwsccLambdaEventSourceMappingScalingConfigOutputReference</a>

---

##### `selfManagedEventSource`<sup>Required</sup> <a name="selfManagedEventSource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.selfManagedEventSource"></a>

```typescript
public readonly selfManagedEventSource: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference</a>

---

##### `selfManagedKafkaEventSourceConfig`<sup>Required</sup> <a name="selfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.selfManagedKafkaEventSourceConfig"></a>

```typescript
public readonly selfManagedKafkaEventSourceConfig: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference</a>

---

##### `sourceAccessConfigurations`<sup>Required</sup> <a name="sourceAccessConfigurations" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.sourceAccessConfigurations"></a>

```typescript
public readonly sourceAccessConfigurations: DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList">DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList</a>

---

##### `startingPosition`<sup>Required</sup> <a name="startingPosition" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.startingPosition"></a>

```typescript
public readonly startingPosition: string;
```

- *Type:* string

---

##### `startingPositionTimestamp`<sup>Required</sup> <a name="startingPositionTimestamp" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.startingPositionTimestamp"></a>

```typescript
public readonly startingPositionTimestamp: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.tags"></a>

```typescript
public readonly tags: DataAwsccLambdaEventSourceMappingTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList">DataAwsccLambdaEventSourceMappingTagsList</a>

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

---

##### `tumblingWindowInSeconds`<sup>Required</sup> <a name="tumblingWindowInSeconds" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.tumblingWindowInSeconds"></a>

```typescript
public readonly tumblingWindowInSeconds: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs = { ... }
```


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs = { ... }
```


### DataAwsccLambdaEventSourceMappingConfig <a name="DataAwsccLambdaEventSourceMappingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_event_source_mapping#id DataAwsccLambdaEventSourceMapping#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaEventSourceMappingDestinationConfig <a name="DataAwsccLambdaEventSourceMappingDestinationConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingDestinationConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure <a name="DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingDestinationConfigOnFailure: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure = { ... }
```


### DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig <a name="DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingFilterCriteria <a name="DataAwsccLambdaEventSourceMappingFilterCriteria" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteria.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingFilterCriteria: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteria = { ... }
```


### DataAwsccLambdaEventSourceMappingFilterCriteriaFilters <a name="DataAwsccLambdaEventSourceMappingFilterCriteriaFilters" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFilters.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingFilterCriteriaFilters: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFilters = { ... }
```


### DataAwsccLambdaEventSourceMappingLoggingConfig <a name="DataAwsccLambdaEventSourceMappingLoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingLoggingConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingMetricsConfig <a name="DataAwsccLambdaEventSourceMappingMetricsConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingMetricsConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingProvisionedPollerConfig <a name="DataAwsccLambdaEventSourceMappingProvisionedPollerConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingProvisionedPollerConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingScalingConfig <a name="DataAwsccLambdaEventSourceMappingScalingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingScalingConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingSelfManagedEventSource <a name="DataAwsccLambdaEventSourceMappingSelfManagedEventSource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSource.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingSelfManagedEventSource: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSource = { ... }
```


### DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints <a name="DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints = { ... }
```


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig = { ... }
```


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs = { ... }
```


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs = { ... }
```


### DataAwsccLambdaEventSourceMappingSourceAccessConfigurations <a name="DataAwsccLambdaEventSourceMappingSourceAccessConfigurations" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurations.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingSourceAccessConfigurations: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurations = { ... }
```


### DataAwsccLambdaEventSourceMappingTags <a name="DataAwsccLambdaEventSourceMappingTags" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTags.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

const dataAwsccLambdaEventSourceMappingTags: dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">schemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroupId`<sup>Required</sup> <a name="consumerGroupId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```typescript
public readonly consumerGroupId: string;
```

- *Type:* string

---

##### `schemaRegistryConfig`<sup>Required</sup> <a name="schemaRegistryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```typescript
public readonly schemaRegistryConfig: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig</a>

---


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>

---


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">eventRecordFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">schemaRegistryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs">schemaValidationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a>

---

##### `eventRecordFormat`<sup>Required</sup> <a name="eventRecordFormat" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```typescript
public readonly eventRecordFormat: string;
```

- *Type:* string

---

##### `schemaRegistryUri`<sup>Required</sup> <a name="schemaRegistryUri" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```typescript
public readonly schemaRegistryUri: string;
```

- *Type:* string

---

##### `schemaValidationConfigs`<sup>Required</sup> <a name="schemaValidationConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs"></a>

```typescript
public readonly schemaValidationConfigs: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference <a name="DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">DataAwsccLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>

---


### DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference <a name="DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure">DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure">DataAwsccLambdaEventSourceMappingDestinationConfigOnFailure</a>

---


### DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference">DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfig">DataAwsccLambdaEventSourceMappingDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.onFailure"></a>

```typescript
public readonly onFailure: DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference">DataAwsccLambdaEventSourceMappingDestinationConfigOnFailureOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingDestinationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDestinationConfig">DataAwsccLambdaEventSourceMappingDestinationConfig</a>

---


### DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName">collectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument">fullDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig">DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionName`<sup>Required</sup> <a name="collectionName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.collectionName"></a>

```typescript
public readonly collectionName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `fullDocument`<sup>Required</sup> <a name="fullDocument" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.fullDocument"></a>

```typescript
public readonly fullDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig">DataAwsccLambdaEventSourceMappingDocumentDbEventSourceConfig</a>

---


### DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList <a name="DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference <a name="DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFilters">DataAwsccLambdaEventSourceMappingFilterCriteriaFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingFilterCriteriaFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFilters">DataAwsccLambdaEventSourceMappingFilterCriteriaFilters</a>

---


### DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference <a name="DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList">DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteria">DataAwsccLambdaEventSourceMappingFilterCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.filters"></a>

```typescript
public readonly filters: DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList">DataAwsccLambdaEventSourceMappingFilterCriteriaFiltersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingFilterCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingFilterCriteria">DataAwsccLambdaEventSourceMappingFilterCriteria</a>

---


### DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfig">DataAwsccLambdaEventSourceMappingLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingLoggingConfig">DataAwsccLambdaEventSourceMappingLoggingConfig</a>

---


### DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.metrics">metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfig">DataAwsccLambdaEventSourceMappingMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingMetricsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingMetricsConfig">DataAwsccLambdaEventSourceMappingMetricsConfig</a>

---


### DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers">maximumPollers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers">minimumPollers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName">pollerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfig">DataAwsccLambdaEventSourceMappingProvisionedPollerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumPollers`<sup>Required</sup> <a name="maximumPollers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.maximumPollers"></a>

```typescript
public readonly maximumPollers: number;
```

- *Type:* number

---

##### `minimumPollers`<sup>Required</sup> <a name="minimumPollers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.minimumPollers"></a>

```typescript
public readonly minimumPollers: number;
```

- *Type:* number

---

##### `pollerGroupName`<sup>Required</sup> <a name="pollerGroupName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.pollerGroupName"></a>

```typescript
public readonly pollerGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingProvisionedPollerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingProvisionedPollerConfig">DataAwsccLambdaEventSourceMappingProvisionedPollerConfig</a>

---


### DataAwsccLambdaEventSourceMappingScalingConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingScalingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency">maximumConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfig">DataAwsccLambdaEventSourceMappingScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumConcurrency`<sup>Required</sup> <a name="maximumConcurrency" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.maximumConcurrency"></a>

```typescript
public readonly maximumConcurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingScalingConfig">DataAwsccLambdaEventSourceMappingScalingConfig</a>

---


### DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference <a name="DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServers">kafkaBootstrapServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints">DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kafkaBootstrapServers`<sup>Required</sup> <a name="kafkaBootstrapServers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.kafkaBootstrapServers"></a>

```typescript
public readonly kafkaBootstrapServers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints">DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpoints</a>

---


### DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference <a name="DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSource">DataAwsccLambdaEventSourceMappingSelfManagedEventSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedEventSourceEndpointsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingSelfManagedEventSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedEventSource">DataAwsccLambdaEventSourceMappingSelfManagedEventSource</a>

---


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId">consumerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig">schemaRegistryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroupId`<sup>Required</sup> <a name="consumerGroupId" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.consumerGroupId"></a>

```typescript
public readonly consumerGroupId: string;
```

- *Type:* string

---

##### `schemaRegistryConfig`<sup>Required</sup> <a name="schemaRegistryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.schemaRegistryConfig"></a>

```typescript
public readonly schemaRegistryConfig: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig</a>

---


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigs</a>

---


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat">eventRecordFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri">schemaRegistryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs">schemaValidationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigAccessConfigsList</a>

---

##### `eventRecordFormat`<sup>Required</sup> <a name="eventRecordFormat" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.eventRecordFormat"></a>

```typescript
public readonly eventRecordFormat: string;
```

- *Type:* string

---

##### `schemaRegistryUri`<sup>Required</sup> <a name="schemaRegistryUri" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaRegistryUri"></a>

```typescript
public readonly schemaRegistryUri: string;
```

- *Type:* string

---

##### `schemaValidationConfigs`<sup>Required</sup> <a name="schemaValidationConfigs" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.schemaValidationConfigs"></a>

```typescript
public readonly schemaValidationConfigs: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfig</a>

---


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference <a name="DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs">DataAwsccLambdaEventSourceMappingSelfManagedKafkaEventSourceConfigSchemaRegistryConfigSchemaValidationConfigs</a>

---


### DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList <a name="DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference <a name="DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurations">DataAwsccLambdaEventSourceMappingSourceAccessConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingSourceAccessConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingSourceAccessConfigurations">DataAwsccLambdaEventSourceMappingSourceAccessConfigurations</a>

---


### DataAwsccLambdaEventSourceMappingTagsList <a name="DataAwsccLambdaEventSourceMappingTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLambdaEventSourceMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLambdaEventSourceMappingTagsOutputReference <a name="DataAwsccLambdaEventSourceMappingTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLambdaEventSourceMapping } from '@cdktn/provider-awscc'

new dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTags">DataAwsccLambdaEventSourceMappingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLambdaEventSourceMappingTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventSourceMapping.DataAwsccLambdaEventSourceMappingTags">DataAwsccLambdaEventSourceMappingTags</a>

---



