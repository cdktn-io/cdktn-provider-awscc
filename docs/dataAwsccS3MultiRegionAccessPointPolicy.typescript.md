# `dataAwsccS3MultiRegionAccessPointPolicy` Submodule <a name="`dataAwsccS3MultiRegionAccessPointPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3MultiRegionAccessPointPolicy <a name="DataAwsccS3MultiRegionAccessPointPolicy" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_multi_region_access_point_policy awscc_s3_multi_region_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.Initializer"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

new dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy(scope: Construct, id: string, config: DataAwsccS3MultiRegionAccessPointPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig">DataAwsccS3MultiRegionAccessPointPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig">DataAwsccS3MultiRegionAccessPointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3MultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isConstruct"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccS3MultiRegionAccessPointPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccS3MultiRegionAccessPointPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccS3MultiRegionAccessPointPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_multi_region_access_point_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3MultiRegionAccessPointPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.mrapName">mrapName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.policyStatus">policyStatus</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference">DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mrapName`<sup>Required</sup> <a name="mrapName" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.mrapName"></a>

```typescript
public readonly mrapName: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `policyStatus`<sup>Required</sup> <a name="policyStatus" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.policyStatus"></a>

```typescript
public readonly policyStatus: DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference">DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3MultiRegionAccessPointPolicyConfig <a name="DataAwsccS3MultiRegionAccessPointPolicyConfig" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

const dataAwsccS3MultiRegionAccessPointPolicyConfig: dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_multi_region_access_point_policy#id DataAwsccS3MultiRegionAccessPointPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus <a name="DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus.Initializer"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

const dataAwsccS3MultiRegionAccessPointPolicyPolicyStatus: dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference <a name="DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer"></a>

```typescript
import { dataAwsccS3MultiRegionAccessPointPolicy } from '@cdktn/provider-awscc'

new dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.isPublic">isPublic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus">DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3MultiRegionAccessPointPolicy.DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus">DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus</a>

---



