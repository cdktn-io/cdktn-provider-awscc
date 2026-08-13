# `dataAwsccResiliencehubResiliencyPolicy` Submodule <a name="`dataAwsccResiliencehubResiliencyPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResiliencehubResiliencyPolicy <a name="DataAwsccResiliencehubResiliencyPolicy" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy(scope: Construct, id: string, config: DataAwsccResiliencehubResiliencyPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig">DataAwsccResiliencehubResiliencyPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig">DataAwsccResiliencehubResiliencyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isConstruct"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccResiliencehubResiliencyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccResiliencehubResiliencyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResiliencehubResiliencyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dataLocationConstraint">dataLocationConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyDescription">policyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataLocationConstraint`<sup>Required</sup> <a name="dataLocationConstraint" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.dataLocationConstraint"></a>

```typescript
public readonly dataLocationConstraint: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policy"></a>

```typescript
public readonly policy: DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference</a>

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `policyDescription`<sup>Required</sup> <a name="policyDescription" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyDescription"></a>

```typescript
public readonly policyDescription: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResiliencehubResiliencyPolicyConfig <a name="DataAwsccResiliencehubResiliencyPolicyConfig" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubResiliencyPolicyConfig: dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehub_resiliency_policy#id DataAwsccResiliencehubResiliencyPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResiliencehubResiliencyPolicyPolicy <a name="DataAwsccResiliencehubResiliencyPolicyPolicy" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubResiliencyPolicyPolicy: dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy = { ... }
```


### DataAwsccResiliencehubResiliencyPolicyPolicyAz <a name="DataAwsccResiliencehubResiliencyPolicyPolicyAz" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubResiliencyPolicyPolicyAz: dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz = { ... }
```


### DataAwsccResiliencehubResiliencyPolicyPolicyHardware <a name="DataAwsccResiliencehubResiliencyPolicyPolicyHardware" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubResiliencyPolicyPolicyHardware: dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware = { ... }
```


### DataAwsccResiliencehubResiliencyPolicyPolicyRegion <a name="DataAwsccResiliencehubResiliencyPolicyPolicyRegion" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubResiliencyPolicyPolicyRegion: dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion = { ... }
```


### DataAwsccResiliencehubResiliencyPolicyPolicySoftware <a name="DataAwsccResiliencehubResiliencyPolicyPolicySoftware" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubResiliencyPolicyPolicySoftware: dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz">DataAwsccResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs"></a>

```typescript
public readonly rpoInSecs: number;
```

- *Type:* number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs"></a>

```typescript
public readonly rtoInSecs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubResiliencyPolicyPolicyAz;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAz">DataAwsccResiliencehubResiliencyPolicyPolicyAz</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware">DataAwsccResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs"></a>

```typescript
public readonly rpoInSecs: number;
```

- *Type:* number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs"></a>

```typescript
public readonly rtoInSecs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubResiliencyPolicyPolicyHardware;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardware">DataAwsccResiliencehubResiliencyPolicyPolicyHardware</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.az">az</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute">softwareAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy">DataAwsccResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.az"></a>

```typescript
public readonly az: DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyAzOutputReference</a>

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware"></a>

```typescript
public readonly hardware: DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.region"></a>

```typescript
public readonly region: DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference</a>

---

##### `softwareAttribute`<sup>Required</sup> <a name="softwareAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute"></a>

```typescript
public readonly softwareAttribute: DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference">DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubResiliencyPolicyPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicy">DataAwsccResiliencehubResiliencyPolicyPolicy</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion">DataAwsccResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs"></a>

```typescript
public readonly rpoInSecs: number;
```

- *Type:* number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs"></a>

```typescript
public readonly rtoInSecs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubResiliencyPolicyPolicyRegion;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicyRegion">DataAwsccResiliencehubResiliencyPolicyPolicyRegion</a>

---


### DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference <a name="DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubResiliencyPolicy } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware">DataAwsccResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs"></a>

```typescript
public readonly rpoInSecs: number;
```

- *Type:* number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs"></a>

```typescript
public readonly rtoInSecs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubResiliencyPolicyPolicySoftware;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubResiliencyPolicy.DataAwsccResiliencehubResiliencyPolicyPolicySoftware">DataAwsccResiliencehubResiliencyPolicyPolicySoftware</a>

---



