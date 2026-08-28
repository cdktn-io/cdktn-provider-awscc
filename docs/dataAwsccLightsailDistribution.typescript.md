# `dataAwsccLightsailDistribution` Submodule <a name="`dataAwsccLightsailDistribution` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailDistribution <a name="DataAwsccLightsailDistribution" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lightsail_distribution awscc_lightsail_distribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistribution(scope: Construct, id: string, config: DataAwsccLightsailDistributionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig">DataAwsccLightsailDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig">DataAwsccLightsailDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailDistribution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isConstruct"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformElement"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformDataSource"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.generateConfigForImport"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLightsailDistribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLightsailDistribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLightsailDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lightsail_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.ableToUpdateBundle">ableToUpdateBundle</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.cacheBehaviors">cacheBehaviors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList">DataAwsccLightsailDistributionCacheBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.cacheBehaviorSettings">cacheBehaviorSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.defaultCacheBehavior">defaultCacheBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference">DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.distributionArn">distributionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.distributionName">distributionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.isEnabled">isEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference">DataAwsccLightsailDistributionOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList">DataAwsccLightsailDistributionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `ableToUpdateBundle`<sup>Required</sup> <a name="ableToUpdateBundle" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.ableToUpdateBundle"></a>

```typescript
public readonly ableToUpdateBundle: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `cacheBehaviors`<sup>Required</sup> <a name="cacheBehaviors" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.cacheBehaviors"></a>

```typescript
public readonly cacheBehaviors: DataAwsccLightsailDistributionCacheBehaviorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList">DataAwsccLightsailDistributionCacheBehaviorsList</a>

---

##### `cacheBehaviorSettings`<sup>Required</sup> <a name="cacheBehaviorSettings" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.cacheBehaviorSettings"></a>

```typescript
public readonly cacheBehaviorSettings: DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference</a>

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="defaultCacheBehavior" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.defaultCacheBehavior"></a>

```typescript
public readonly defaultCacheBehavior: DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference">DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `distributionArn`<sup>Required</sup> <a name="distributionArn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.distributionArn"></a>

```typescript
public readonly distributionArn: string;
```

- *Type:* string

---

##### `distributionName`<sup>Required</sup> <a name="distributionName" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.distributionName"></a>

```typescript
public readonly distributionName: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.origin"></a>

```typescript
public readonly origin: DataAwsccLightsailDistributionOriginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference">DataAwsccLightsailDistributionOriginOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.tags"></a>

```typescript
public readonly tags: DataAwsccLightsailDistributionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList">DataAwsccLightsailDistributionTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistribution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailDistributionCacheBehaviors <a name="DataAwsccLightsailDistributionCacheBehaviors" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviors.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionCacheBehaviors: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviors = { ... }
```


### DataAwsccLightsailDistributionCacheBehaviorSettings <a name="DataAwsccLightsailDistributionCacheBehaviorSettings" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettings.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionCacheBehaviorSettings: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettings = { ... }
```


### DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies <a name="DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies = { ... }
```


### DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders <a name="DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders = { ... }
```


### DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings <a name="DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings = { ... }
```


### DataAwsccLightsailDistributionConfig <a name="DataAwsccLightsailDistributionConfig" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionConfig: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lightsail_distribution#id DataAwsccLightsailDistribution#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLightsailDistributionDefaultCacheBehavior <a name="DataAwsccLightsailDistributionDefaultCacheBehavior" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehavior.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionDefaultCacheBehavior: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehavior = { ... }
```


### DataAwsccLightsailDistributionOrigin <a name="DataAwsccLightsailDistributionOrigin" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOrigin.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionOrigin: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOrigin = { ... }
```


### DataAwsccLightsailDistributionTags <a name="DataAwsccLightsailDistributionTags" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTags.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

const dataAwsccLightsailDistributionTags: dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference <a name="DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList">cookiesAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookiesAllowList`<sup>Required</sup> <a name="cookiesAllowList" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList"></a>

```typescript
public readonly cookiesAllowList: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---


### DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference <a name="DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList">headersAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headersAllowList`<sup>Required</sup> <a name="headersAllowList" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList"></a>

```typescript
public readonly headersAllowList: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---


### DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference <a name="DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option">option</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList">queryStringsAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option"></a>

```typescript
public readonly option: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `queryStringsAllowList`<sup>Required</sup> <a name="queryStringsAllowList" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList"></a>

```typescript
public readonly queryStringsAllowList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---


### DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference <a name="DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods">cachedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies">forwardedCookies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders">forwardedHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings">forwardedQueryStrings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl">minimumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettings">DataAwsccLightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string;
```

- *Type:* string

---

##### `cachedHttpMethods`<sup>Required</sup> <a name="cachedHttpMethods" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods"></a>

```typescript
public readonly cachedHttpMethods: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `forwardedCookies`<sup>Required</sup> <a name="forwardedCookies" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies"></a>

```typescript
public readonly forwardedCookies: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a>

---

##### `forwardedHeaders`<sup>Required</sup> <a name="forwardedHeaders" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders"></a>

```typescript
public readonly forwardedHeaders: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a>

---

##### `forwardedQueryStrings`<sup>Required</sup> <a name="forwardedQueryStrings" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings"></a>

```typescript
public readonly forwardedQueryStrings: DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">DataAwsccLightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a>

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

---

##### `minimumTtl`<sup>Required</sup> <a name="minimumTtl" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl"></a>

```typescript
public readonly minimumTtl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionCacheBehaviorSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorSettings">DataAwsccLightsailDistributionCacheBehaviorSettings</a>

---


### DataAwsccLightsailDistributionCacheBehaviorsList <a name="DataAwsccLightsailDistributionCacheBehaviorsList" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.get"></a>

```typescript
public get(index: number): DataAwsccLightsailDistributionCacheBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLightsailDistributionCacheBehaviorsOutputReference <a name="DataAwsccLightsailDistributionCacheBehaviorsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviors">DataAwsccLightsailDistributionCacheBehaviors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionCacheBehaviors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionCacheBehaviors">DataAwsccLightsailDistributionCacheBehaviors</a>

---


### DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference <a name="DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehavior">DataAwsccLightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionDefaultCacheBehavior">DataAwsccLightsailDistributionDefaultCacheBehavior</a>

---


### DataAwsccLightsailDistributionOriginOutputReference <a name="DataAwsccLightsailDistributionOriginOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.protocolPolicy">protocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOrigin">DataAwsccLightsailDistributionOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolPolicy`<sup>Required</sup> <a name="protocolPolicy" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.protocolPolicy"></a>

```typescript
public readonly protocolPolicy: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionOrigin;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionOrigin">DataAwsccLightsailDistributionOrigin</a>

---


### DataAwsccLightsailDistributionTagsList <a name="DataAwsccLightsailDistributionTagsList" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLightsailDistributionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLightsailDistributionTagsOutputReference <a name="DataAwsccLightsailDistributionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLightsailDistribution } from '@cdktn/provider-awscc'

new dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTags">DataAwsccLightsailDistributionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLightsailDistributionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailDistribution.DataAwsccLightsailDistributionTags">DataAwsccLightsailDistributionTags</a>

---



