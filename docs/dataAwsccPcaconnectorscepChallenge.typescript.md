# `dataAwsccPcaconnectorscepChallenge` Submodule <a name="`dataAwsccPcaconnectorscepChallenge` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectorscepChallenge <a name="DataAwsccPcaconnectorscepChallenge" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorscep_challenge awscc_pcaconnectorscep_challenge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepChallenge } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge(scope: Construct, id: string, config: DataAwsccPcaconnectorscepChallengeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig">DataAwsccPcaconnectorscepChallengeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig">DataAwsccPcaconnectorscepChallengeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectorscepChallenge resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isConstruct"></a>

```typescript
import { dataAwsccPcaconnectorscepChallenge } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformElement"></a>

```typescript
import { dataAwsccPcaconnectorscepChallenge } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformDataSource"></a>

```typescript
import { dataAwsccPcaconnectorscepChallenge } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.generateConfigForImport"></a>

```typescript
import { dataAwsccPcaconnectorscepChallenge } from '@cdktn/provider-awscc'

dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPcaconnectorscepChallenge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPcaconnectorscepChallenge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPcaconnectorscepChallenge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorscep_challenge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectorscepChallenge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.challengeArn">challengeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `challengeArn`<sup>Required</sup> <a name="challengeArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.challengeArn"></a>

```typescript
public readonly challengeArn: string;
```

- *Type:* string

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallenge.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectorscepChallengeConfig <a name="DataAwsccPcaconnectorscepChallengeConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.Initializer"></a>

```typescript
import { dataAwsccPcaconnectorscepChallenge } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectorscepChallengeConfig: dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectorscepChallenge.DataAwsccPcaconnectorscepChallengeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcaconnectorscep_challenge#id DataAwsccPcaconnectorscepChallenge#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



