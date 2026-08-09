# `dataAwsccCloudfrontRealtimeLogConfig` Submodule <a name="`dataAwsccCloudfrontRealtimeLogConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontRealtimeLogConfig <a name="DataAwsccCloudfrontRealtimeLogConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_realtime_log_config awscc_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig(scope: Construct, id: string, config: DataAwsccCloudfrontRealtimeLogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig">DataAwsccCloudfrontRealtimeLogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig">DataAwsccCloudfrontRealtimeLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontRealtimeLogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontRealtimeLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontRealtimeLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.endPoints">endPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList">DataAwsccCloudfrontRealtimeLogConfigEndPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endPoints`<sup>Required</sup> <a name="endPoints" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.endPoints"></a>

```typescript
public readonly endPoints: DataAwsccCloudfrontRealtimeLogConfigEndPointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList">DataAwsccCloudfrontRealtimeLogConfigEndPointsList</a>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontRealtimeLogConfigConfig <a name="DataAwsccCloudfrontRealtimeLogConfigConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontRealtimeLogConfigConfig: dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_realtime_log_config#id DataAwsccCloudfrontRealtimeLogConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontRealtimeLogConfigEndPoints <a name="DataAwsccCloudfrontRealtimeLogConfigEndPoints" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints.Initializer"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontRealtimeLogConfigEndPoints: dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints = { ... }
```


### DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig: dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

---


### DataAwsccCloudfrontRealtimeLogConfigEndPointsList <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontRealtimeLogConfig } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig">kinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints">DataAwsccCloudfrontRealtimeLogConfigEndPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kinesisStreamConfig`<sup>Required</sup> <a name="kinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig"></a>

```typescript
public readonly kinesisStreamConfig: DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a>

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontRealtimeLogConfigEndPoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints">DataAwsccCloudfrontRealtimeLogConfigEndPoints</a>

---



