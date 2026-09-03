# `dataAwsccDatazoneSubscriptionTarget` Submodule <a name="`dataAwsccDatazoneSubscriptionTarget` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneSubscriptionTarget <a name="DataAwsccDatazoneSubscriptionTarget" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/datazone_subscription_target awscc_datazone_subscription_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

new dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget(scope: Construct, id: string, config: DataAwsccDatazoneSubscriptionTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isConstruct"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformElement"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatazoneSubscriptionTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatazoneSubscriptionTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneSubscriptionTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.applicableAssetTypes">applicableAssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.authorizedPrincipals">authorizedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.manageAccessRole">manageAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetConfig">subscriptionTargetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetId">subscriptionTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicableAssetTypes`<sup>Required</sup> <a name="applicableAssetTypes" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.applicableAssetTypes"></a>

```typescript
public readonly applicableAssetTypes: string[];
```

- *Type:* string[]

---

##### `authorizedPrincipals`<sup>Required</sup> <a name="authorizedPrincipals" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.authorizedPrincipals"></a>

```typescript
public readonly authorizedPrincipals: string[];
```

- *Type:* string[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `manageAccessRole`<sup>Required</sup> <a name="manageAccessRole" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.manageAccessRole"></a>

```typescript
public readonly manageAccessRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `subscriptionTargetConfig`<sup>Required</sup> <a name="subscriptionTargetConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetConfig"></a>

```typescript
public readonly subscriptionTargetConfig: DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList</a>

---

##### `subscriptionTargetId`<sup>Required</sup> <a name="subscriptionTargetId" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.subscriptionTargetId"></a>

```typescript
public readonly subscriptionTargetId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneSubscriptionTargetConfig <a name="DataAwsccDatazoneSubscriptionTargetConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.Initializer"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

const dataAwsccDatazoneSubscriptionTargetConfig: dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/datazone_subscription_target#id DataAwsccDatazoneSubscriptionTarget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig <a name="DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig.Initializer"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

const dataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig: dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList <a name="DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

new dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.get"></a>

```typescript
public get(index: number): DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference <a name="DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatazoneSubscriptionTarget } from '@cdktn/provider-awscc'

new dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName">formName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `formName`<sup>Required</sup> <a name="formName" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneSubscriptionTarget.DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig">DataAwsccDatazoneSubscriptionTargetSubscriptionTargetConfig</a>

---



