# `dataAwsccIvsPlaybackRestrictionPolicy` Submodule <a name="`dataAwsccIvsPlaybackRestrictionPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIvsPlaybackRestrictionPolicy <a name="DataAwsccIvsPlaybackRestrictionPolicy" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ivs_playback_restriction_policy awscc_ivs_playback_restriction_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

new dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy(scope: Construct, id: string, config: DataAwsccIvsPlaybackRestrictionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig">DataAwsccIvsPlaybackRestrictionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig">DataAwsccIvsPlaybackRestrictionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isConstruct"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIvsPlaybackRestrictionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIvsPlaybackRestrictionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ivs_playback_restriction_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIvsPlaybackRestrictionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedCountries">allowedCountries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement">enableStrictOriginEnforcement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList">DataAwsccIvsPlaybackRestrictionPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allowedCountries`<sup>Required</sup> <a name="allowedCountries" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedCountries"></a>

```typescript
public readonly allowedCountries: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `enableStrictOriginEnforcement`<sup>Required</sup> <a name="enableStrictOriginEnforcement" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement"></a>

```typescript
public readonly enableStrictOriginEnforcement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tags"></a>

```typescript
public readonly tags: DataAwsccIvsPlaybackRestrictionPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList">DataAwsccIvsPlaybackRestrictionPolicyTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIvsPlaybackRestrictionPolicyConfig <a name="DataAwsccIvsPlaybackRestrictionPolicyConfig" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

const dataAwsccIvsPlaybackRestrictionPolicyConfig: dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ivs_playback_restriction_policy#id DataAwsccIvsPlaybackRestrictionPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIvsPlaybackRestrictionPolicyTags <a name="DataAwsccIvsPlaybackRestrictionPolicyTags" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags.Initializer"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

const dataAwsccIvsPlaybackRestrictionPolicyTags: dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIvsPlaybackRestrictionPolicyTagsList <a name="DataAwsccIvsPlaybackRestrictionPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

new dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference <a name="DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIvsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

new dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags">DataAwsccIvsPlaybackRestrictionPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIvsPlaybackRestrictionPolicyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsPlaybackRestrictionPolicy.DataAwsccIvsPlaybackRestrictionPolicyTags">DataAwsccIvsPlaybackRestrictionPolicyTags</a>

---



