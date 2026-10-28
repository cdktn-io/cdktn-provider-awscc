# `dataAwsccCloudwatchOtelEnrichment` Submodule <a name="`dataAwsccCloudwatchOtelEnrichment` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchOtelEnrichment <a name="DataAwsccCloudwatchOtelEnrichment" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/cloudwatch_otel_enrichment awscc_cloudwatch_otel_enrichment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment(scope: Construct, id: string, config: DataAwsccCloudwatchOtelEnrichmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig">DataAwsccCloudwatchOtelEnrichmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig">DataAwsccCloudwatchOtelEnrichmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isConstruct"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformElement"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudwatchOtelEnrichment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudwatchOtelEnrichment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/cloudwatch_otel_enrichment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchOtelEnrichment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.excludeFilters">excludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList">DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.includeFilters">includeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList">DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `excludeFilters`<sup>Required</sup> <a name="excludeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.excludeFilters"></a>

```typescript
public readonly excludeFilters: DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList">DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList</a>

---

##### `includeFilters`<sup>Required</sup> <a name="includeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.includeFilters"></a>

```typescript
public readonly includeFilters: DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList">DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchOtelEnrichmentConfig <a name="DataAwsccCloudwatchOtelEnrichmentConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchOtelEnrichmentConfig: dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/cloudwatch_otel_enrichment#id DataAwsccCloudwatchOtelEnrichment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchOtelEnrichmentExcludeFilters <a name="DataAwsccCloudwatchOtelEnrichmentExcludeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFilters.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchOtelEnrichmentExcludeFilters: dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFilters = { ... }
```


### DataAwsccCloudwatchOtelEnrichmentIncludeFilters <a name="DataAwsccCloudwatchOtelEnrichmentIncludeFilters" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFilters.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchOtelEnrichmentIncludeFilters: dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFilters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList <a name="DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference <a name="DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFilters">DataAwsccCloudwatchOtelEnrichmentExcludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchOtelEnrichmentExcludeFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentExcludeFilters">DataAwsccCloudwatchOtelEnrichmentExcludeFilters</a>

---


### DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList <a name="DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference <a name="DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchOtelEnrichment } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFilters">DataAwsccCloudwatchOtelEnrichmentIncludeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchOtelEnrichmentIncludeFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchOtelEnrichment.DataAwsccCloudwatchOtelEnrichmentIncludeFilters">DataAwsccCloudwatchOtelEnrichmentIncludeFilters</a>

---



